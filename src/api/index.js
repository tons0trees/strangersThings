const url = 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT'


export async function getPostList(authString) {
    try {
        let tokenToPass = {}
        if (authString) {
            tokenToPass = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authString}`
                }
            }
        }
        const response = await fetch(`${url}/posts`,tokenToPass)
        const posts = await response.json()
        return posts.data.posts
    } catch (error) {
        console.log("An error occurred", error)
    }
}

//logIn function takes parameters for the username and password, attempts to log in using the API and returns a token string if successfully.
export async function logIn(paramUsername, paramPassword) {
    try {
        const userToLogin = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: {username: paramUsername, password: paramPassword}
            })
        }
        const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/login',userToLogin)
        const result = await response.json()
        return result.data.token
    } catch (error) {
        console.log('there is an error', error)
    }
}

