<script setup lang="ts">
import {
	ColumnDef,
	getCoreRowModel,
	useVueTable
} from "@tanstack/vue-table";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

defineProps<DataTableProps<any, any>>()

const table = useVueTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
  <div class="rounded-md border">
    <Table>
      <TableHeader>
        <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <TableHead v-for="header in headerGroup.headers" :key="header.id">
            <template v-if="!header.isPlaceholder">
              {{ header.column.columnDef.header }}
            </template>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="table.getRowModel().rows.length">
          <TableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            :data-state="row.getIsSelected() && 'selected'"
          >
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              {{ cell.column.columnDef.cell }}
            </TableCell>
          </TableRow>
        </template>
        <TableRow v-else>
          <TableCell :colspan="columns.length" class="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>  </div>
</template>
