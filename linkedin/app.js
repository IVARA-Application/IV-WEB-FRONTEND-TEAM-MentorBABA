if (process.env.NODE_ENV !== 'production')
    require('dotenv').config();

const express = require('express');
const app = express();

const axios = require('axios');

app.use(express.json())


//redirect_uri is urlencoded url
app.get('/login/linkedin', (req, res) => {
    //redirects to login page
    res.redirect(`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&state=987654321&scope=r_liteprofile%20r_emailaddress`)
})

app.get('/redirect', async (req, res) => {
    // console.log(req.query, req.params)
    const { code } = req.query;
    try {
        let accessToken = await fetchAccessToken(code)
        if (accessToken !== -1) {
            const email = await fetchDetails(accessToken)
            if (email !== -1) {
                //save in db
                return res.json(email)
            }
            return res.status(403).json('No email associated')
        }
        res.status(401).json('Invalid token')
    } catch (e) {
        console.log(e)
        res.status(400).json('err');
    }
})


app.get('/', (req, res) => {
    res.send('Homie')
})

app.listen(3000, () => {
    console.log('server running');
})

async function fetchAccessToken(code) {
    try {
        const resp1 = await axios.post(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${code}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)
        return resp1.data.access_token
    } catch (e) {
        console.log(e)
        return -1
    }
}

async function fetchDetails(accessToken) {

    try {
        //for fullName
        // const resp2 = await axios.get('https://api.linkedin.com/v2/me', {
        //for email    
        const resp2 = await axios.get('https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~))', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        //will fetch email if exists
        return resp2.data.elements[0]['handle~'].emailAddress
        // const { localizedFirstName, localizedLastName } = resp2.data
        // return localizedFirstName + localizedLastName

    } catch (e) {
        console.log(e)
        return -1
    }
}
