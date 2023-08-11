
// Function for get api call
const getProfile =async()=>{
    try{
        let res = await  fetch('https://panorbit.in/api/users.json')
        res = await res.json()
        return res.users
    }catch(e){
        console.error('Error fetching user data:', e);
    }
}

export default getProfile;