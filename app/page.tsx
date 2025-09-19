"use client";
import { useState } from "react";
import { AudioRecorderWithVisualizer } from "@/components/audio-recorder-with-visualizer";
import { PageHeader, PageHeaderHeading } from "@/components/ui/page";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [variant, setVariant] = useState<
    | "bars"
    | "line"
    | "circle"
    | "wave"
    | "verticalBars"
    | "radial"
    | "dots"
    | "pulse"
  >("line");

  return (
    <div className="container relative flex-1 flex flex-col justify-center items-center min-h-screen">
      <PageHeader>
        <PageHeaderHeading>Audio recorder with visualizer</PageHeaderHeading>

        {/* ===== Variant selector ===== */}
        <div className="my-4 w-60 space-y-2">
          <Label htmlFor="visualizer-variant" className="mb-1">
            Select Visualizer Type
          </Label>
          <Select
            value={variant}
            onValueChange={(val) =>
              setVariant(
                val as
                  | "bars"
                  | "line"
                  | "circle"
                  | "wave"
                  | "verticalBars"
                  | "radial"
                  | "dots"
                  | "pulse"
              )
            }
          >
            <SelectTrigger id="visualizer-variant">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bars">Bars</SelectItem>
              <SelectItem value="line">Line</SelectItem>
              <SelectItem value="circle">Circle</SelectItem>
              <SelectItem value="wave">Wave</SelectItem>
              <SelectItem value="verticalBars">Vertical Bars</SelectItem>
              <SelectItem value="radial">Radial</SelectItem>
              <SelectItem value="dots">Dots</SelectItem>
              <SelectItem value="pulse">Pulse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* ===== Audio Recorder ===== */}
        <AudioRecorderWithVisualizer
          variant={variant}
          className="my-12 w-full max-w-full"
        />
      </PageHeader>
    </div>
  );
}
