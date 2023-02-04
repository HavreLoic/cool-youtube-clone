import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from '../index'
import { fetchFromAPI } from "../../utils/fetch-from-api";

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])
    const { id } = useParams();
    console.log(channelDetail, videos)
    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]))

        fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
            .then((data) => setVideos(data?.items))
    }, [id])
    return (
        <div>ChannelDetail</div>
    )
}

export default ChannelDetail