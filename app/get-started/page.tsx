"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useRef, useState } from "react";

const GetStarted = () => {
  // Define the type of refs as HTMLDivElement
  const form_1 = useRef<HTMLDivElement>(null);
  const form_2 = useRef<HTMLDivElement>(null);
  const form_3 = useRef<HTMLDivElement>(null);

  const [activeForm, setActiveForm] = useState(1);

  const handleNextClick = () => {
    console.log("click", activeForm);
    switch (activeForm) {
      case 1:
        form_2.current?.scrollIntoView({ behavior: "smooth" });
        setActiveForm(2);
        break;
      case 2:
        form_3.current?.scrollIntoView({ behavior: "smooth" });
        setActiveForm(3);
        break;
    }
  };

  const handleBackClick = () => {
    switch (activeForm) {
      case 2:
        form_1.current?.scrollIntoView({ behavior: "smooth" });
        setActiveForm(1);
        break;
      case 3:
        form_2.current?.scrollIntoView({ behavior: "smooth" });
        setActiveForm(2);
        break;
    }
  };

  const handleSubmitClick = () => {
    console.log("submit");
  };

  return (
    <div className="h-[calc(100vh-150px)] flex justify-center items-center">
      <div className="bg-gray-50 w-1/2 overflow-hidden h-[20rem] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex">
        <Form1 handleNextClick={handleNextClick} formRef={form_1} />
        <Form2
          handleNextClick={handleNextClick}
          handleBackClick={handleBackClick}
          formRef={form_2}
        />
        <Form3
          handleBackClick={handleBackClick}
          handleSubmitClick={handleSubmitClick}
          formRef={form_3}
        />
      </div>
    </div>
  );
};

export default GetStarted;

const Form1 = ({
  handleNextClick,
  formRef,
}: {
  handleNextClick: () => void;
  formRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={formRef} className="min-w-full p-8 flex flex-col justify-between">
      <div className="space-y-4">
        <p className="font-bold text-3xl">Please enter your Atlassian Host</p>
        <p className="font-light">Form 1 of 3</p>
      </div>
      <Input placeholder="your-domain.atlassian.net" />
      <Button
        onClick={handleNextClick}
        className="bg-orange-500 font-bold"
        size="lg"
      >
        Next
      </Button>
    </div>
  );
};

const Form2 = ({
  handleNextClick,
  handleBackClick,
  formRef,
}: {
  handleNextClick: () => void;
  handleBackClick: () => void;
  formRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={formRef} className="min-w-full p-8 flex flex-col justify-between">
      <div className="space-y-4">
        <p className="font-bold text-3xl">
          Please enter your Atlassian User Name
        </p>
        <p className="font-light">Form 2 of 3</p>
      </div>
      <Input placeholder="email@example.com" />
      <div className="flex space-x-4">
        <Button
          onClick={handleBackClick}
          className="bg-orange-500 font-bold w-1/2"
          size="lg"
        >
          Back
        </Button>
        <Button
          onClick={handleNextClick}
          className="bg-orange-500 font-bold w-1/2"
          size="lg"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

const Form3 = ({
  handleBackClick,
  handleSubmitClick,
  formRef,
}: {
  handleBackClick: () => void;
  handleSubmitClick: () => void;
  formRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={formRef} className="min-w-full p-8 flex flex-col justify-between">
      <div className="space-y-4">
        <p className="font-bold text-3xl">
          Please enter your Atlassian Api Key
        </p>
        <p className="font-light">Form 3 of 3</p>
      </div>
      <Input placeholder="your api_token" />
      <div className="flex space-x-4">
        <Button
          onClick={handleBackClick}
          className="bg-orange-500 font-bold w-1/2"
          size="lg"
        >
          Back
        </Button>
        <Button
          onClick={handleSubmitClick}
          className="bg-orange-500 font-bold w-1/2"
          size="lg"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
