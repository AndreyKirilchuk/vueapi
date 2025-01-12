async function handleResponce(response)
{
    if(response.status >= 200 && response.status < 300 )
    {
        return ( await response.json()).data;
    }else if(response.status >= 400 && response.status < 500)
    {
        const error = (await response.json()).error;

        const messages = [error.message];

        if(error.errors) messages.push(...Object.values(error.errors));

        const id = Math.random().toString();
        document.body.insertAdjacentHTML('beforeend', `<div id="${id}" class="notify">${messages.join('<br />')}</div>`);
        const el = document.getElementById(id);
        setTimeout(() => {
            el.classList.add('show');
            setTimeout(() => {
                el.classList.remove('show');
                setTimeout(() => el.remove(), 1000)
            }, 3000)
        }, 1000)
    }else{
        alert("Server error")
    }
}

export default async function $fetch(path, method = 'get', body = null)
{
    const url = new URL("http://api/api" + path)

    const headers = { 'Authorization': `Bearer ${localStorage.getItem('token')}`}

    if(!body || method === 'get')
    {
        url.search = new URLSearchParams(body ?? {}).toString();
        return await handleResponce(await fetch(url, {method, headers}))
    }

    return await handleResponce(await fetch(url, {method, body, headers}))
}