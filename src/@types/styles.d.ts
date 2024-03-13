import 'styled-components'
import { DefaultTheme } from 'styled-components'


type ThemeType = DefaultTheme

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType {}
}