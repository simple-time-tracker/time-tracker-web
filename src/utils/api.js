import axios from "axios";

const API_URL = "/api/";
const PROJECTS_PATH = "projects";
const TIME_ENTRIES_PATH = "entries";

export const getProjects = () => axios.get(API_URL + PROJECTS_PATH);

export const getTimeEntries = () => axios.get(API_URL + TIME_ENTRIES_PATH);
