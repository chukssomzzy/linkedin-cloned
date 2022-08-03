import { SvgIconProps, SvgIconTypeMap,AvartarTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

 export type IconType = {
    Icon: OverridableComponent<SvgIconTypeMap<{},"svg">> & { muiName: string} | OverridableComponent<AvartarTypeMap<{}, 'div'>>
 }
