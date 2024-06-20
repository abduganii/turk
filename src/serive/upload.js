import axios from "axios";
export const FileUpload = async (data) => { 
    const response = await axios.post(`${process.env.NEXT_PUBLIC_IMAGE_URL}upload/image/`, data, {
        headers: {
            'Content-Type': "multipart/form-data",
    }},);
    return response;
}