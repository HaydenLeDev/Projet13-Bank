import axios from 'axios'

export const getData = async () => {
    try{
        const reponse = await axios ("http://localhost:3001" ,)
        return reponse
    } catch (e){
        console.log(e)
    }
}