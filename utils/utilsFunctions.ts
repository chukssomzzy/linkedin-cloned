 
export const trunc = (text: string, charAmount: number)=>
        `${text.length > charAmount ? text.slice(0, charAmount - 1 ) + ' ...see more' : text}` 
