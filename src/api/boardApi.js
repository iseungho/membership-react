import jwtAxios from "../util/jwtUtil";
import {API_SERVER_HOST} from "./memberApi";

const foundPath = `${API_SERVER_HOST}/api/found`
const lostPath = `${API_SERVER_HOST}/api/lost`
const freePath = `${API_SERVER_HOST}/api/free`


export const getAllFoundBoard = async (pageParam) => {
    const { page, size } = pageParam;

    try {
        const response = await jwtAxios.get(`${foundPath}/`, { params: { page, size } });
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export const getAllLostBoard = async (pageParam) => {
    const { page, size } = pageParam;

    try {
        const response = await jwtAxios.get(`${lostPath}/`, { params: { page, size } });
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export const getAllFreeBoard = async (pageParam) => {
    const { page, size } = pageParam;

    try {
        const response = await jwtAxios.get(`${freePath}/`, { params: { page, size } });
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export const getFoundBoardById = async (param) => {
    const {pno} = param
    try {
        const response = await jwtAxios.get(`${foundPath}/${pno}`);
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export const getFoundBoardByPno = async (param) => {
    try {
        const response = await jwtAxios.get(`${foundPath}/${param}`);
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export const getFreeBoardById = async (param) => {
    const {pno} = param
    try {
        const response = await jwtAxios.get(`${freePath}/${pno}`);
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export const getLostBoardById = async (param) => {
    const {pno} = param
    try {
        const response = await jwtAxios.get(`${lostPath}/${pno}`);
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export const postFoundBoard = async (boardData) => {
    try {
        const response = await jwtAxios.post(`${foundPath}/`, {
            title: boardData.title,
            content: boardData.content,
            mno: boardData.mno,
            categoryId: boardData.categoryId,
            regionId: boardData.regionId,
            location: boardData.location,
            photoUrl: boardData.photoUrl,
            postType: "FOUND",
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postFreeBoard = async (boardData) => {
    try {
        const response = await jwtAxios.post(`${freePath}/`, {
            title: boardData.title,
            content: boardData.content,
            mno: boardData.mno,
            categoryId: boardData.categoryId,
            regionId: boardData.regionId,
            location: boardData.location,
            photoUrl: boardData.photoUrl,
            postType: "FREE",
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postLostBoard = async (boardData) => {
    try {
        const response = await jwtAxios.post(`${lostPath}/`, {
            title: boardData.title,
            content: boardData.content,
            mno: boardData.mno,
            categoryId: boardData.categoryId,
            regionId: boardData.regionId,
            location: boardData.location,
            photoUrl: boardData.photoUrl,
            postType: "LOST",
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const modifyFoundBoard = async (pno, boardData) => {
    try {
        const response = await jwtAxios.put(`${foundPath}/${pno}`, {
            title: boardData.title,
            content: boardData.content,
            categoryId: boardData.categoryId,
            regionId: boardData.regionId,
            location: boardData.location,
            photoUrl: boardData.photoUrl
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const modifyFreeBoard = async (pno, boardData) => {
    try {
        const response = await jwtAxios.put(`${freePath}/${pno}`, {
            title: boardData.title,
            content: boardData.content,
            categoryId: boardData.categoryId,
            regionId: boardData.regionId,
            location: boardData.location,
            photoUrl: boardData.photoUrl
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const modifyLostBoard = async (pno, boardData) => {
    try {
        const response = await jwtAxios.put(`${lostPath}/${pno}`, {
            title: boardData.title,
            content: boardData.content,
            categoryId: boardData.categoryId,
            regionId: boardData.regionId,
            location: boardData.location,
            photoUrl: boardData.photoUrl
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteFoundBoard = async (pno) => {
    try {
        const response = await jwtAxios.delete(`${foundPath}/${pno}`);
        return response.data;
    } catch (error) {
        throw new Error('게시글 삭제에 실패했습니다.');
    }
};
export const deleteFreeBoard = async (pno) => {
    try {
        const response = await jwtAxios.delete(`${freePath}/${pno}`);
        return response.data;
    } catch (error) {
        throw new Error('게시글 삭제에 실패했습니다.');
    }
};
export const deleteLostBoard = async (pno) => {
    try {
        const response = await jwtAxios.delete(`${lostPath}/${pno}`);
        return response.data;
    } catch (error) {
        throw new Error('게시글 삭제에 실패했습니다.');
    }
};
