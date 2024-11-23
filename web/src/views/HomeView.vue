<template>
  <div className="space-y-8">
    <h1 className="text-3xl font-bold">Dashboard</h1>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,324,789</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">78ms</div>
          <p className="text-xs text-muted-foreground">-5% from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">0.12%</div>
          <p className="text-xs text-muted-foreground">+0.03% from yesterday</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Endpoints</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-muted-foreground">+2 new this week</p>
        </CardContent>
      </Card>
    </div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <Overview />
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentActivity />
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from '@/components/ui/overview';
import { RecentActivity } from '@/components/ui/recent-activity';
</script>
