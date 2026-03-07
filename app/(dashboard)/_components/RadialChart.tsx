"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Task } from "@/types/tasks";
import { EmptyState } from "./EmptyState";
import { LayoutTemplate } from "lucide-react";

const chartConfig = {
  count: {
    label: "Count",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const TaskRadarChart = ({ tasks }: { tasks: Task[] }) => {
  const statusData = [
    {
      status: "Backlog",
      count: tasks.filter((t) => t.status === "backlog").length,
    },
    { status: "Todo", count: tasks.filter((t) => t.status === "to-do").length },
    {
      status: "In Progress",
      count: tasks.filter((t) => t.status === "in-progress").length,
    },
    { status: "Done", count: tasks.filter((t) => t.status === "done").length },
  ];

  if (tasks.length === 0)
    return (
      <EmptyState
        icon={LayoutTemplate}
        title="Tasks"
        description="Start by syncing your Google Tasks or create a new one."
        className="p-6 h-full"
      />
    );

  return (
    <div className="w-full h-full min-h-45">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square h-full w-full"
      >
        <RadarChart
          data={statusData}
          margin={{ top: 0, right: 30, bottom: 0, left: 30 }}
        >
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis
            dataKey="status"
            tick={{ fill: "currentColor", fontSize: 9, opacity: 0.6 }}
          />
          <PolarGrid gridType="polygon" />
          <Radar
            dataKey="count"
            fill="var(--chart-1)"
            fillOpacity={0.5}
            stroke="var(--chart-1)"
            strokeWidth={2}
            dot={{ r: 3, fillOpacity: 1 }}
          />
        </RadarChart>
      </ChartContainer>
    </div>
  );
};

export default TaskRadarChart;
