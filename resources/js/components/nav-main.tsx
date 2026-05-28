import { Link } from '@inertiajs/react';
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem } from '@/types';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    // Memanggil hook untuk mengecek URL halaman saat ini
    const { isCurrentUrl } = useCurrentUrl();

    return (
        <SidebarGroup className="px-4 py-6">
            {/* Teks "Platform" yang bawaan template sengaja dihilangkan agar persis seperti Figma */}
            <SidebarMenu>
                {items.map((item) => {
                    // Mengecek apakah menu ini adalah halaman yang sedang dibuka
                    const active = isCurrentUrl(item.href);

                    return (
                        <SidebarMenuItem key={item.title} className="mb-2">
                            <SidebarMenuButton
                                asChild
                                isActive={active}
                                tooltip={{ children: item.title }}
                                // LOGIKA WARNA:
                                // Kita gunakan '!bg-[#0b6a95]' (perhatikan tanda seru) untuk memaksa
                                // warna biru tua menimpa warna abu-abu bawaan template.
                                className={`px-4 py-5 rounded-xl font-bold transition-all duration-200 ${
                                    active 
                                    ? '!bg-[#0b6a95] !text-white shadow-md hover:!bg-[#0b6a95] hover:!text-white' 
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            >
                                <Link href={item.href} prefetch className="flex items-center gap-3">
                                    {item.icon && <item.icon className="w-5 h-5" />}
                                    <span className="text-[14px]">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}