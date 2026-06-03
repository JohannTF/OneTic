import { Search } from "lucide-react";

export function SearchField() {
  return (
    <div className="relative hidden sm:block">
      <Search
        className="text-text-tertiary pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
        aria-hidden="true"
      />
      <input
        type="search"
        placeholder="Buscar en la documentación..."
        className="border-border-subtle bg-surface-1 text-text-primary placeholder:text-text-tertiary focus:border-accent-border focus:ring-accent-subtle h-9 w-56 rounded-lg border pr-3 pl-9 text-sm focus:ring-2 focus:outline-none lg:w-72"
      />
    </div>
  );
}
