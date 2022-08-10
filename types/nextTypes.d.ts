import { SvgIconProps, SvgIconTypeMap,AvartarTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

 export type IconType = {
    Icon: OverridableComponent<SvgIconTypeMap<{},"svg">> & { muiName: string} | OverridableComponent<AvartarTypeMap<{}, 'div'>>
 }

 export type PostType = {
     post: string,
     _id?: string
     imageUrl: string,
     postedBy: {
       userName: string, 
       userEmail: string,
       userImageUrl: string
     },
     createdAt: string
 }


export type ArticleType ={
    source : {
         id?: string,
         name?: string
}, 
author?: string,
title?: string,
description?: string,
url?: string,
urlToImage?: string,
publishedAt?: string, 
content?: string
}
