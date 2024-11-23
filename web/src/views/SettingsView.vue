<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold">Settings</h1>
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage your email notifications</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="flex items-center justify-between">
          <Label for="error-alerts">Error Alerts</Label>
          <Switch id="error-alerts" />
        </div>
        <div class="flex items-center justify-between">
          <Label for="weekly-report">Weekly Report</Label>
          <Switch id="weekly-report" />
        </div>
        <div class="flex items-center justify-between">
          <Label for="new-features">New Features</Label>
          <Switch id="new-features" />
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>API Key</CardTitle>
        <CardDescription>Manage your API key</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="space-y-2">
          <Label for="api-key">Current API Key</Label>
          <Input id="api-key" type="password" value="••••••••••••••••" readonly />
        </div>
        <Button>Regenerate API Key</Button>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>Update your account settings</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="space-y-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div class="space-y-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter new password" />
        </div>
        <Button>Update Account</Button>
      </CardContent>
    </Card>
  </div>
</template>
