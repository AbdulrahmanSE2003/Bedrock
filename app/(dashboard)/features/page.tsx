"use client";

import { useState } from "react";
import { useIdeasStore } from "@/store/useIdeasStore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus } from "lucide-react";

const Page = () => {
  const { ideas, addIdea, toggleIdea, deleteIdea } = useIdeasStore();
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const handleAdd = () => {
    if (!newTitle) return;
    addIdea(newTitle, newDesc);
    setNewTitle("");
    setNewDesc("");
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Roadmap</h1>
          <p className="text-xs text-muted-foreground">
            Internal feature tracking for Bedrock.
          </p>
        </div>
      </div>

      {/* Quick Add Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-muted/30 p-4 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800">
        <Input
          placeholder="Feature title..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="h-9"
        />
        <Input
          placeholder="Brief description..."
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          className="h-9"
        />
        <Button onClick={handleAdd} size="sm" className="gap-2">
          <Plus size={14} /> Add Feature
        </Button>
      </div>

      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-card overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-12 text-center">Done</TableHead>
              <TableHead className="w-48">Feature</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ideas.map((idea) => (
              <TableRow
                key={idea.id}
                className={`${idea.completed ? "opacity-50" : ""} transition-opacity group`}
              >
                <TableCell className="text-center">
                  <Checkbox
                    checked={idea.completed}
                    onCheckedChange={() => toggleIdea(idea.id)}
                  />
                </TableCell>
                <TableCell
                  className={`font-bold text-sm ${idea.completed ? "line-through" : ""}`}
                >
                  {idea.title}
                </TableCell>
                <TableCell className="text-xs text-muted-foreground leading-relaxed">
                  {idea.desc}
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteIdea(idea.id)}
                    className="opacity-0 group-hover:opacity-100 text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 size={14} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
