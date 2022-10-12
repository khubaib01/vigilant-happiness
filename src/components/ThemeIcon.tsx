import { useStore } from "@/store/store";
import { IconSunHigh, IconMoonStars } from "@tabler/icons";

export const ThemeIcon = () => {
  const dark = useStore((state) => state.dark);
  const toggleDark = useStore((state) => state.toggleDark);

  return (
    <div
      className="rounded-lg flex justify-center items-center cursor-pointer bg-sky-600 text-gray-50 dark:text-gray-800 dark:bg-yellow-400 w-8 h-8"
      onClick={toggleDark}
    >
      {dark ? (
        <IconSunHigh width="23px" height="23px" />
      ) : (
        <IconMoonStars width="23px" height="23px" />
      )}
    </div>
  );
};
