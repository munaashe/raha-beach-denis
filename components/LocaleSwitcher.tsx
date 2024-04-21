'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

type LanguageItem = {
  label: string;
  key: string;
};

const LocalSwitcher: React.FC = () => {
  const items: LanguageItem[] = [
    {
      label: "🇺k English",
      key: "en",
    },
    {
      label: "🇫🇷 French",
      key: "fr",
    },
  ];

  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const onChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const nextLocale = event.target.value;

    setIsPending(true);
    try {
      await router.replace(`/${nextLocale}`);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="relative">
      <select className="globe-icon bg-gray-800" onChange={onChange}>
        {items.map((item) => (
          <option key={item.key} value={item.key}>
            {item.label}
          </option>
        ))}
      </select>
      {isPending && <div>Loading...</div>}
    </div>
  );
};

export default LocalSwitcher;