import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { createEvent, deleteEvent, getSingleEvent, updateEvent } from "../api";
import { useHistory } from "react-router-dom";

const SingleEvent = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [eventData, setEventData] = useState({
    name: "",
    place: "",
    time: "",
    participants: "",
    id: "TestID",
  });
  const eventId = window.location.href.split("/").pop();

  useEffect(() => {
    getSingleEvent(eventId).then((response) => {
      setEventData(response.data);
      setIsLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    setEventData({ ...eventData, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(eventId, eventData);
    updateEvent(eventId, eventData);
    // history.push("/overview");
  };

  const handleDelete = (id) => {
    deleteEvent(id);
    history.push("/overview");
  };

  return (
    <Layout>
      <h1>Single Event</h1> <button onClick={() => history.push("/overview")}>Back to Overview</button>
      {!isLoading ? (
        <InputForm onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="name"
            id="name"
            value={eventData.name}
            placeholder="Name of Event"
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="place"
            id="place"
            value={eventData.place}
            placeholder="Place of Event"
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="time"
            id="time"
            value={eventData.time}
            placeholder="Time of Event"
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="participants"
            id="participants"
            value={eventData.participants}
            placeholder="Participants"
            onChange={handleChange}
            required
          />
          <button type="submit">Save changes</button>
          <button type="button" onClick={() => handleDelete(eventId)}>
            Delete
          </button>
        </InputForm>
      ) : (
        <h1>Loading...</h1>
      )}
    </Layout>
  );
};

export default SingleEvent;

const InputField = styled.input``;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
`;
