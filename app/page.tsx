import React from 'react'


const fetchMockUsers =  async (input : string) => {
    const res = await fetch(`https://63794b947419b414df8d237a.mockapi.io/${input}`, {cache: 'no-store'});
    return res.json();
}


type user = {
    id: number,
    name: string,
    surname: string,
    createdAt: Date
}

async function Page() {
  const data : user[] = await fetchMockUsers("users");
  return (
    <>
    {
        data && data.map((item : user) => (
            <div key={item.id}>
                <div>
                    {item.name}
                </div>
                <div>
                    {item.surname}
                </div>
                <div>
                    {item.createdAt.toString()}
                </div>
            </div>
        ))
    }
    </>
  )
}

export default Page