import jwtAxios from "../util/jwtUtil";
import { API_SERVER_HOST } from "./memberApi";

const foundPath = `${API_SERVER_HOST}/api/found`
const lostPath = `${API_SERVER_HOST}/api/lost`
const freePath = `${API_SERVER_HOST}/api/free`

export const postFoundBoard = async (boardData) => {
    const formData = new FormData();
    formData.append('title', boardData.title);
    formData.append('content', boardData.content);
    formData.append('ino', boardData.ino);

    try {
        const response = jwtAxios.post();
        return response;
    } catch (error) {
        
    }
}

export const getAllFoundBoard = async (pageParam) => {
    const { page, size } = pageParam;

    try {
        const response = await jwtAxios.get(`${foundPath}/`, { params: { page, size } });
        console.log(response.data)
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export const getAllLostBoard = async () => {
    try {
        const response = await jwtAxios.get(`${lostPath}/`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export const getAllFreeBoard = async () => {
    try {
        const response = await jwtAxios.get(`${freePath}/`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export const getFoundBoardById = async (param) => {
    const {pno} = param
    try {
        const response = await jwtAxios.get(`${foundPath}/${pno}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export const deleteFoundBoard = async (pno) => {
    try {
        const response = await jwtAxios.delete(`${foundPath}/${pno}`);
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export const putFoundBoard = async (pno, boardData) => {
    const formData = new FormData();
    formData.append('title', boardData.title);
    formData.append('content', boardData.content);
    formData.append('ino', boardData.ino);

    const response = await jwtAxios.put(`${foundPath}/${pno}`)

    return response.data;
}