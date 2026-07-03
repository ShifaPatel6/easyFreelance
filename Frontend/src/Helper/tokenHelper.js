import {supabase} from '../Supabse/supabseClient'

export const getToken = async ({url , options={}}) => {

    const {data} = await supabase.auth.getSession();
    const token = data.session?.access_token;

    const response = await fetch(url,{
        ...options,
      headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,   
            ...options.headers                   
        }})
        return response;

}