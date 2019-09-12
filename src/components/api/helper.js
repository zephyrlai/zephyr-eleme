import axios from 'axios'

const ERROR_OK = 0

export function get(url) {
    return (params={}) => {
        return axios.get(url,{params})
        .then((res) => {
            const {code,data} =  res.data;
            if(code === ERROR_OK){
                return data;
            }
        })
        .catch((e) =>{
            
        })
    }
}