import { useGetTasksQuery } from "@/state/api";
import React from "react";

type ListProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

function ListView({ id, setIsModalNewTaskOpen }: ListProps) {
    const {data: tasks, error, isLoading } = useGetTasksQuery({projectId: Number(id)})
  return <div>ListView</div>;
}

export default ListView;
