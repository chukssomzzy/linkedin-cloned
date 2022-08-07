import { Article, BusinessCenterOutlined, PhotoSizeSelectActual, VideoCameraBackRounded } from "@mui/icons-material"

export const HomeButtonData = [
 'search for a job', 'Find a person you know', 'learn a new skilks'
]

export const IndexButtonData = [
    
    {
        title:'Photo'     ,
        icon: PhotoSizeSelectActual,
        wrap: false,
        iconStyle:'text-blue-400' 
    } ,
    {
        title: 'Video' ,
        icon: VideoCameraBackRounded ,
        wrap: false ,
        iconStyle: 'text-green-300'
    },
    {
        title: 'Job' ,
        icon: BusinessCenterOutlined  ,
        wrap: false,
        iconStyle: 'text-blue-400'
    } ,
    {
        title: 'Write Article',
        icon:Article,
        wrap: true ,
        iconStyle: 'text-red-400'
    }
]
