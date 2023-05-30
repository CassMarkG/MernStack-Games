import axios from 'axios';

const api_Url = '/api/streams/';

const createGoal = async(goalData,token) => {
    const config = {
        headers: {
            Authorization: 'Bearer' + token,
        },
    }
    const response = await axios.post(api_Url,goalData,config)

    return response.data
}

const getGoals = async(token) => {
    const config = {
        headers: {
            Authorization: 'Bearer' + token,
        },
    }

    const response = await axios.get(api_Url,config)

    return response.data
}

export const deleteGoal = async(goalId,token) => {
    const config = {
        headers: {
            Authorization: 'Bearer' + token,
        },
    }

    const response = await axios.delete(api_Url + goalId,config)

    return response.data
}

const goalService = {
    createGoal,getGoals,deleteGoal
}


export default goalService;