import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create Users
  const user1 = await prisma.user.create({
    data: {
      email: 'admin@desaspasial.id',
      nama: 'Admin Desa',
      password: 'password', // Storing plain text password for now, consider hashing in a real app
      role: 'admin',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'rimzindustries@gmail.com',
      nama: 'Rimz Industries',
      password: 'password', 
      role: 'admin',
    },
  });

  // Create Menus
  const topNav = await prisma.menu.create({
    data: {
      name: 'TopNav',
    },
  });

  const bottomNav = await prisma.menu.create({
    data: {
      name: 'BottomNav',
    },
  });

  // Create Menu Items for TopNav
  const topNavProfil = await prisma.menuItem.create({
    data: {
      title: 'Profil',
      path: '/profil/profil-desa',
      menuId: topNav.id,
    },
  });

  await prisma.menuItem.createMany({
    data: [
      { title: 'Sejarah Desa', path: '/profil/sejarah-desa', menuId: topNav.id, parentId: topNavProfil.id, icon: 'History' },
      { title: 'Perkembangan', path: '/profil/perkembangan', menuId: topNav.id, parentId: topNavProfil.id, icon: 'ChevronUp' },
      { title: 'Visi & Misi', path: '/profil/visi-misi', menuId: topNav.id, parentId: topNavProfil.id, icon: 'Target' },
    ],
  });
  
  const topNavLayanan = await prisma.menuItem.create({
    data: {
      title: 'Layanan',
      path: '/layanan',
      menuId: topNav.id,
    },
  });

  await prisma.menuItem.createMany({
    data: [
        { title: 'Persuratan', path: '/layanan/persuratan', menuId: topNav.id, parentId: topNavLayanan.id, icon: 'ScrollText' },
        { title: 'Perlindungan Sosial', path: '/layanan/perlindungan-sosial', menuId: topNav.id, parentId: topNavLayanan.id, icon: 'HeartHandshake' },
        { title: 'Penanganan Keluhan', path: '/layanan/penanganan-keluhan', menuId: topNav.id, parentId: topNavLayanan.id, icon: 'MessageSquareWarning' },
        { title: 'Monografi Desa', path: '/layanan/monografi-desa', menuId: topNav.id, parentId: topNavLayanan.id, icon: 'BookOpen' },
        { title: 'Peraturan Desa', path: '/layanan/peraturan-desa', menuId: topNav.id, parentId: topNavLayanan.id, icon: 'Scale' },
    ]
  });

  // Create Menu Items for BottomNav
  const bottomNavProfil = await prisma.menuItem.create({
    data: {
      title: 'Profil',
      path: '/profil/profil-desa',
      menuId: bottomNav.id,
      icon: 'User'
    },
  });

  await prisma.menuItem.createMany({
    data: [
        { title: 'Profil Desa', path: '/profil/profil-desa', menuId: bottomNav.id, parentId: bottomNavProfil.id, icon: 'Home' },
        { title: 'Sejarah Desa', path: '/profil/sejarah-desa', menuId: bottomNav.id, parentId: bottomNavProfil.id, icon: 'History' },
        { title: 'Visi & Misi', path: '/profil/visi-misi', menuId: bottomNav.id, parentId: bottomNavProfil.id, icon: 'Target' },
        { title: 'Arah Kebijakan', path: '/profil/arah-kebijakan', menuId: bottomNav.id, parentId: bottomNavProfil.id, icon: 'Compass' },
    ]
  });

  const bottomNavPembangunan = await prisma.menuItem.create({
    data: {
      title: 'Pembangunan',
      path: '/pembangunan/daftar-program',
      menuId: bottomNav.id,
      icon: 'Building2'
    },
  });

  await prisma.menuItem.createMany({
    data: [
        { title: 'Daftar Program', path: '/pembangunan/daftar-program', menuId: bottomNav.id, parentId: bottomNavPembangunan.id, icon: 'ListTodo' },
        { title: 'Indeks Desa Membangun', path: '/pembangunan/idm', menuId: bottomNav.id, parentId: bottomNavPembangunan.id, icon: 'FileText' },
        { title: 'Ketahanan Desa', path: '/pembangunan/ketahanan-desa', menuId: bottomNav.id, parentId: bottomNavPembangunan.id, icon: 'FileText' },
    ]
  });

  const bottomNavDanaDesa = await prisma.menuItem.create({
    data: {
      title: 'Dana Desa',
      path: '/dana-desa',
      menuId: bottomNav.id,
      icon: 'Wallet'
    },
  });

  await prisma.menuItem.createMany({
    data: [
        { title: 'Pendapatan', path: '/dana-desa/pendapatan', menuId: bottomNav.id, parentId: bottomNavDanaDesa.id, icon: 'FileText' },
        { title: 'Belanja', path: '/dana-desa/belanja', menuId: bottomNav.id, parentId: bottomNavDanaDesa.id, icon: 'FileText' },
        { title: 'Pembiayaan', path: '/dana-desa/pembiayaan', menuId: bottomNav.id, parentId: bottomNavDanaDesa.id, icon: 'FileText' },
    ]
  });


  console.log({ user1, user2, topNav, bottomNav });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
