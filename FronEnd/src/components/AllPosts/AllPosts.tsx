/* eslint-disable no-underscore-dangle */
import {
 Box, Paper, Button,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { get } from '../../Plugins/http';
import UsersPost from './CreatePost/Post';

type PostData = {
    photo: string,
    title: string,
    _id: string,
};
const AllPosts = () => {
    const navigate = useNavigate();
    const secret = localStorage.getItem('secret');
    const [postData, setPostData] = React.useState<PostData[]>([]);

    const createPost = () => {
        navigate('/CreatePost');
    };
    React.useEffect(() => {
        (async () => {
          const response = await get(`getPostData/${secret}`);
          setPostData(response.data.post);
        })();
      }, []);

      const postRemoved = (id:string) => {
        let myPosts = [...postData];
        myPosts = myPosts.filter((x) => x._id !== id);
        setPostData(myPosts);
    };
    const handleCancel = () => {
        navigate('/HomePage');
    };
    return (
      <Box>
        <Box sx={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
        >
          <Paper
            elevation={6}
            sx={{
              width: '400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <Box sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px',
            }}
            >
              {postData.map((el) => (
                <UsersPost
                  key={el._id}
                  title={el.title}
                  photo={el.photo}
                  _id={el._id}
                  postRemoved={postRemoved}
                />
            ))}
              <Box sx={{
 display: 'flex', flexDirection: 'column', height: '100px', justifyContent: 'space-between',
}}
              >
                <Button onClick={createPost} variant="contained">Create Post</Button>
                <Button onClick={handleCancel} variant="contained">Back</Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
        );
};

export default AllPosts;
