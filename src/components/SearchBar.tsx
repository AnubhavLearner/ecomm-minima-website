import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { getAllProducts } from "@/utils/products";
import { Product } from "@/utils/types";

const SearchBar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  
  useEffect(() => {
    if (searchQuery.length > 1) {
      const allProducts = getAllProducts();
      const filtered = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24">
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg px-4">
        <Command className="rounded-lg border shadow-md">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              ref={inputRef}
              value={searchQuery}
              onValueChange={setSearchQuery}
              placeholder="Search products..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="p-1">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {searchResults.length > 0 && (
              <CommandGroup heading="Products">
                {searchResults.map((product) => (
                  <CommandItem key={product.id} className="p-2">
                    <Link
                      to={`/productDetails/${product.id}`}
                      className="flex items-center gap-3 w-full"
                      onClick={onClose}
                    >
                      <div className="h-12 w-12 overflow-hidden rounded bg-secondary">
                        <img 
                          src={product.images[0]} 
                          alt={product.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{product.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {product.category} · ${product.price}
                        </span>
                      </div>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </div>
    </div>
  );
};

export default SearchBar;
