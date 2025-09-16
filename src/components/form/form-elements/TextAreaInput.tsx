"use client";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import TextArea from "../input/TextArea";
import Label from "../Label";

export default function TextAreaInput() {
  const [message, setMessage] = useState("");
  const [messageTwo, setMessageTwo] = useState("");
  return (
    <ComponentCard title="Textarea input field">
      <div className="space-y-6">
        <div>
          <Label>Description</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
          />
        </div>

        <div>
          <Label>Description</Label>
          <TextArea rows={6} disabled />
        </div>

        <div>
          <Label>Description</Label>
          <TextArea
            rows={6}
            value={messageTwo}
            error
            onChange={(value) => setMessageTwo(value)}
            hint="Please enter a valid message."
          />
        </div>
      </div>
    </ComponentCard>
  );
}
