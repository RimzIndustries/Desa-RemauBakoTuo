import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create Users
  const user1 = await prisma.user.upsert({
    where: { email: 'admin@desaspasial.id' },
    update: {},
    create: {
      email: 'admin@desaspasial.id',
      nama: 'Admin Desa',
      password: 'password', // Storing plain text password for now, consider hashing in a real app
      role: 'admin',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'rimzindustries@gmail.com' },
    update: {
      password: 'rimzindustries@gmail.com',
    },
    create: {
      email: 'rimzindustries@gmail.com',
      nama: 'Rimz Industries',
      password: 'rimzindustries@gmail.com', 
      role: 'admin',
    },
  });

  const user3 = await prisma.user.upsert({
    where: { email: 'admin@desa-remaubakotuo.com' },
    update: {},
    create: {
      email: 'admin@desa-remaubakotuo.com',
      nama: 'Admin Remau Bako Tuo',
      password: 'admin@desa-remaubakotuo.com123',
      role: 'admin',
    },
  });

  // Create Menus
  const topNav = await prisma.menu.upsert({
    where: { name: 'TopNav' },
    update: {},
    create: {
      name: 'TopNav',
    },
  });

  const bottomNav = await prisma.menu.upsert({
    where: { name: 'BottomNav' },
    update: {},
    create: {
      name: 'BottomNav',
    },
  });

  // Create Menu Items for TopNav
  const topNavProfil = await prisma.menuItem.upsert({
    where: { path_title: { path: '/profil/profil-desa', title: 'Profil' } },
    update: {},
    create: {
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
    skipDuplicates: true,
  });
  
  const topNavLayanan = await prisma.menuItem.upsert({
    where: { path_title: { path: '/layanan', title: 'Layanan' } },
    update: {},
    create: {
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
    ],
    skipDuplicates: true,
  });

  // Create Menu Items for BottomNav
  const bottomNavProfil = await prisma.menuItem.upsert({
    where: { path_title: { path: '/profil/profil-desa', title: 'Profil' } },
    update: {},
    create: {
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
    ],
    skipDuplicates: true,
  });

  const bottomNavPembangunan = await prisma.menuItem.upsert({
    where: { path_title: { path: '/pembangunan/daftar-program', title: 'Pembangunan' } },
    update: {},
    create: {
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
    ],
    skipDuplicates: true,
  });

  const bottomNavDanaDesa = await prisma.menuItem.upsert({
    where: { path_title: { path: '/dana-desa', title: 'Dana Desa' } },
    update: {},
    create: {
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
    ],
    skipDuplicates: true,
  });


  console.log({ user1, user2, user3, topNav, bottomNav });
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
