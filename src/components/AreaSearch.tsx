import { Area } from "@/types";
import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface AreaSearchProps {
  areas: Area[];
  onSelect: (area: Area) => void;
}

export default function AreaSearch({ areas, onSelect }: AreaSearchProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const filtered = query
    ? areas.filter(
        (a) =>
          a.name.toLowerCase().includes(query.toLowerCase()) ||
          a.borough.toLowerCase().includes(query.toLowerCase())
      )
    : areas;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <div className="flex items-center rounded-md border border-border bg-card px-3 py-2 shadow-sm">
        <Search className="mr-2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search areas..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>
      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-64 overflow-y-auto rounded-md border border-border bg-card shadow-lg">
          {filtered.length === 0 ? (
            <div className="p-3 text-sm text-muted-foreground">No areas found</div>
          ) : (
            filtered.map((area) => (
              <button
                key={area.id}
                onClick={() => {
                  onSelect(area);
                  setQuery("");
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-accent transition-colors"
              >
                <span className="font-medium text-foreground">{area.name}</span>
                <span className="text-xs text-muted-foreground">{area.borough}</span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
