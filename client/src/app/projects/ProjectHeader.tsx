import React, { useState } from "react";
import Header from "@/components/Header";

type Props = {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
};

function ProjectHeader({ activeTab, setActiveTab }: Props) {
  const [isModalNewProjectOpen, setIsModalNewTaskOpen] = useState(false);
  return (
    <div className="px-4 xl:py-6">
        <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
            <Header name="Product Design Development" />

        </div>
    </div>
  )
}

export default ProjectHeader;
