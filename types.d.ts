import { SvgIconProps, SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

 export type IconType = {
    Icon: OverridableComponent<SvgIconTypeMap<{},"svg">> & { muiName: string}
 }
