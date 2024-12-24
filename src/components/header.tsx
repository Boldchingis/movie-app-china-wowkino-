import { Film } from 'lucide-react';
import { Search } from 'lucide-react';
import { Moon } from 'lucide-react';

export function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <Film className="text-white mr-2" />
        <p className="text-2xl font-bold">Movie Z</p>
      </div>
      <div className="flex space-x-4">
        <Search className="text-white" />
        <Moon className="text-white" />
      </div>
    </div>
  );
}
