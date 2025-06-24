import * as React from 'react'
import {
  ChartAreaAxes,
  ChartAreaDefault,
  ChartAreaGradient,
  ChartAreaIcons,
  ChartAreaInteractive,
  ChartAreaLegend,
  ChartAreaLinear,
  ChartAreaStacked,
  ChartAreaStackedExpand,
  ChartAreaStep,
} from '@/components/ui/charts/area'
import { ChartBarInteractive } from '@/components/ui/charts/bar/chart-bar-interactive'
import { ChartLineInteractive } from '@/components/ui/charts/line/chart-line-interactive'

type ChartComponent = React.ComponentType

interface ChartItem {
  id: string
  component: ChartComponent
  fullWidth?: boolean
}

interface ChartGroups {
  area: ChartItem[]
  bar: ChartItem[]
  line: ChartItem[]
  pie: ChartItem[]
  radar: ChartItem[]
  radial: ChartItem[]
  tooltip: ChartItem[]
}

export const charts: ChartGroups = {
  area: [
    {
      id: 'chart-area-interactive',
      component: ChartAreaInteractive,
      fullWidth: true,
    },
    { id: 'chart-area-default', component: ChartAreaDefault },
    { id: 'chart-area-linear', component: ChartAreaLinear },
    { id: 'chart-area-step', component: ChartAreaStep },
    { id: 'chart-area-legend', component: ChartAreaLegend },
    { id: 'chart-area-stacked', component: ChartAreaStacked },
    { id: 'chart-area-stacked-expand', component: ChartAreaStackedExpand },
    { id: 'chart-area-icons', component: ChartAreaIcons },
    { id: 'chart-area-gradient', component: ChartAreaGradient },
    { id: 'chart-area-axes', component: ChartAreaAxes },
  ],
  bar: [
    {
      id: 'chart-bar-interactive',
      component: ChartBarInteractive,
      fullWidth: true,
    },
  ],
  line: [
    {
      id: 'chart-line-interactive',
      component: ChartLineInteractive,
      fullWidth: true,
    },
  ],
  pie: [],
  radar: [],
  radial: [],
  tooltip: [],
}

// Export individual components for backward compatibility
export {
  ChartAreaAxes,
  ChartAreaDefault,
  ChartAreaGradient,
  ChartAreaIcons,
  ChartAreaInteractive,
  ChartAreaLegend,
  ChartAreaLinear,
  ChartAreaStacked,
  ChartAreaStackedExpand,
  ChartAreaStep,
}
