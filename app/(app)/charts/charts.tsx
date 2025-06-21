import * as React from 'react'
import {
  ChartAreaAxes,
  ChartAreaDefault,
  ChartAreaInteractive,
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
    { id: 'chart-area-axes', component: ChartAreaAxes },
    { id: 'chart-area-default', component: ChartAreaDefault },
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
