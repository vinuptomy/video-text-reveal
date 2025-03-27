
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Info, Settings, Mail, BookOpen, FileText, ChevronDown, Users, Home, Globe, Lightbulb, PenTool, Clock } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-blue-950 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/1fb85011-ddb2-47a5-b309-3c000bb6ed6c.png" 
                alt="Munter AI Logo" 
                className="h-12 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-white">Munter AI</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:block">
              <NavigationMenu className="h-20">
                <NavigationMenuList className="h-full">
                  {/* About Us */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-full font-bold text-white bg-transparent hover:bg-blue-900">
                      <Info className="w-4 h-4 mr-2" />
                      About Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-900 to-blue-950 p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <Users className="h-6 w-6 text-white" />
                              <div className="mb-2 mt-4 text-lg font-medium text-white">
                                Our Team
                              </div>
                              <p className="text-sm leading-tight text-white/80">
                                Meet the experts behind Munter AI solutions.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/" title="Our Mission" icon={<Home className="h-4 w-4 mr-2" />}>
                          Learn about our values and vision
                        </ListItem>
                        <ListItem href="/" title="Our Approach" icon={<Lightbulb className="h-4 w-4 mr-2" />}>
                          How we transform businesses with AI
                        </ListItem>
                        <ListItem href="/" title="Our History" icon={<Clock className="h-4 w-4 mr-2" />}>
                          The journey of Munter AI
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Services */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-full font-bold text-white bg-transparent hover:bg-blue-900">
                      <Settings className="w-4 h-4 mr-2" />
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        <ListItem href="/consulting" title="AI Consulting" icon={<PenTool className="h-4 w-4 mr-2" />}>
                          Strategic AI implementation for your business
                        </ListItem>
                        <ListItem href="/consulting" title="Custom Development" icon={<Settings className="h-4 w-4 mr-2" />}>
                          Tailored AI solutions for specific needs
                        </ListItem>
                        <ListItem href="/consulting" title="AI Integration" icon={<Globe className="h-4 w-4 mr-2" />}>
                          Seamless integration with existing systems
                        </ListItem>
                        <ListItem href="/consulting" title="AI Training" icon={<Users className="h-4 w-4 mr-2" />}>
                          Educate your team on AI technologies
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Solutions */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-full font-bold text-white bg-transparent hover:bg-blue-900">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        <ListItem href="/generative-ai" title="Generative AI" icon={<PenTool className="h-4 w-4 mr-2" />}>
                          Create content with advanced AI models
                        </ListItem>
                        <ListItem href="/agentic-ai" title="Agentic AI" icon={<Settings className="h-4 w-4 mr-2" />}>
                          Autonomous AI agents for complex tasks
                        </ListItem>
                        <ListItem href="/generative-ai" title="Computer Vision" icon={<Globe className="h-4 w-4 mr-2" />}>
                          Image and video processing solutions
                        </ListItem>
                        <ListItem href="/generative-ai" title="Natural Language" icon={<BookOpen className="h-4 w-4 mr-2" />}>
                          Advanced text and language processing
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Blog */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-full font-bold text-white bg-transparent hover:bg-blue-900">
                      <FileText className="w-4 h-4 mr-2" />
                      Blog
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        <ListItem href="/article/1" title="Latest Articles" icon={<FileText className="h-4 w-4 mr-2" />}>
                          Our newest insights and tutorials
                        </ListItem>
                        <ListItem href="/article/2" title="Case Studies" icon={<BookOpen className="h-4 w-4 mr-2" />}>
                          Real-world applications of our solutions
                        </ListItem>
                        <ListItem href="/article/3" title="AI News" icon={<Globe className="h-4 w-4 mr-2" />}>
                          Stay updated with the latest in AI
                        </ListItem>
                        <ListItem href="/article/4" title="Industry Trends" icon={<Lightbulb className="h-4 w-4 mr-2" />}>
                          Where AI is heading next
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Contact Us */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-full font-bold text-white bg-transparent hover:bg-blue-900">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        <ListItem href="/contact" title="Get in Touch" icon={<Mail className="h-4 w-4 mr-2" />}>
                          Reach out to our team
                        </ListItem>
                        <ListItem href="/contact" title="Schedule Demo" icon={<PenTool className="h-4 w-4 mr-2" />}>
                          See our solutions in action
                        </ListItem>
                        <ListItem href="/contact" title="Support" icon={<Settings className="h-4 w-4 mr-2" />}>
                          Get help with our products
                        </ListItem>
                        <ListItem href="/contact" title="Careers" icon={<Users className="h-4 w-4 mr-2" />}>
                          Join our growing team
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          )}
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-md hover:bg-blue-900 transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-950 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="space-y-1">
              <MobileMenuItem 
                to="/" 
                icon={<Info className="w-5 h-5 mr-2" />}
                label="About Us"
                onClick={() => setIsMenuOpen(false)}
              />
              <MobileSubmenuItem label="Our Mission" to="/" />
              <MobileSubmenuItem label="Our Approach" to="/" />
              <MobileSubmenuItem label="Our History" to="/" />
              <MobileSubmenuItem label="Our Team" to="/" />
            </div>

            <div className="space-y-1">
              <MobileMenuItem 
                to="/consulting" 
                icon={<Settings className="w-5 h-5 mr-2" />}
                label="Services"
                onClick={() => setIsMenuOpen(false)}
              />
              <MobileSubmenuItem label="AI Consulting" to="/consulting" />
              <MobileSubmenuItem label="Custom Development" to="/consulting" />
              <MobileSubmenuItem label="AI Integration" to="/consulting" />
              <MobileSubmenuItem label="AI Training" to="/consulting" />
            </div>

            <div className="space-y-1">
              <MobileMenuItem 
                to="/generative-ai" 
                icon={<Lightbulb className="w-5 h-5 mr-2" />}
                label="Solutions"
                onClick={() => setIsMenuOpen(false)}
              />
              <MobileSubmenuItem label="Generative AI" to="/generative-ai" />
              <MobileSubmenuItem label="Agentic AI" to="/agentic-ai" />
              <MobileSubmenuItem label="Computer Vision" to="/generative-ai" />
              <MobileSubmenuItem label="Natural Language" to="/generative-ai" />
            </div>

            <div className="space-y-1">
              <MobileMenuItem 
                to="/article/1" 
                icon={<FileText className="w-5 h-5 mr-2" />}
                label="Blog"
                onClick={() => setIsMenuOpen(false)}
              />
              <MobileSubmenuItem label="Latest Articles" to="/article/1" />
              <MobileSubmenuItem label="Case Studies" to="/article/2" />
              <MobileSubmenuItem label="AI News" to="/article/3" />
              <MobileSubmenuItem label="Industry Trends" to="/article/4" />
            </div>

            <div className="space-y-1">
              <MobileMenuItem 
                to="/contact" 
                icon={<Mail className="w-5 h-5 mr-2" />}
                label="Contact Us"
                onClick={() => setIsMenuOpen(false)}
              />
              <MobileSubmenuItem label="Get in Touch" to="/contact" />
              <MobileSubmenuItem label="Schedule Demo" to="/contact" />
              <MobileSubmenuItem label="Support" to="/contact" />
              <MobileSubmenuItem label="Careers" to="/contact" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface ListItemProps {
  title: string;
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ title, icon, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-900 hover:text-white focus:bg-blue-900 focus:text-white"
            )}
            {...props}
          >
            <div className="flex items-center text-sm font-medium leading-none text-white">
              {icon}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-white/80">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

interface MobileMenuItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ to, icon, label, onClick }) => {
  return (
    <Link 
      to={to} 
      className="block px-3 py-2 text-white hover:bg-blue-900 rounded-md flex items-center font-bold"
      onClick={onClick}
    >
      {icon}
      {label}
    </Link>
  );
};

interface MobileSubmenuItemProps {
  label: string;
  to: string;
}

const MobileSubmenuItem: React.FC<MobileSubmenuItemProps> = ({ label, to }) => {
  return (
    <Link 
      to={to} 
      className="block ml-6 px-3 py-2 text-white/80 hover:bg-blue-900 hover:text-white rounded-md text-sm"
    >
      {label}
    </Link>
  );
};

export default Navbar;
