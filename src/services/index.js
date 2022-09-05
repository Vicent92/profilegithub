const url = 'https://api.github.com/users/'

export const getUserGit = async (user) => {
    const res  = await fetch(`${url}${user}`,{
        method: 'GET'
      })

      const data = res.json()

    return data    
}