import axiosWithAuth from '../axios/axiosWithAuth';
 
export const getColors = () => {
  return axiosWithAuth().get('http://localhost:5000/api/colors')
  .then(res => {
    console.log(res.data);
    return res;
  })
  .catch(err => console.log(err));
}

