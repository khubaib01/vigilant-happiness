import { IconArrowUp, IconArrowDown } from "@tabler/icons";

export const CollapseIcon = ({ open }: { open: boolean }) => {
  return (
    <div className="rounded-lg flex justify-center items-center bg-sky-600 text-gray-50 dark:text-gray-800 dark:bg-yellow-400 w-8 h-8">
      {open ? (
        <IconArrowUp width="23px" height="23px" />
      ) : (
        <IconArrowDown width="23px" height="23px" />
      )}
    </div>
  );
};
