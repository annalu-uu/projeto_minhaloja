const produtos = [
    // --- SEÇÃO 1: Lançamentos (id_secao: 1) ---
    { id_produto: 1, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/gta6.jpg", id_secao: 1, secao: "Lançamentos" },
    { id_produto: 2, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/wukong.jpg", id_secao: 1, secao: "Lançamentos" },
    { id_produto: 3, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/re9.jpg", id_secao: 1, secao: "Lançamentos" },
    { id_produto: 4, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/fifa26.jpg", id_secao: 1, secao: "Lançamentos" },
    { id_produto: 5, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/death_stranding_2.jpg", id_secao: 1, secao: "Lançamentos" },
    { id_produto: 6, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/ghost_of_yotei.jpg", id_secao: 1, secao: "Lançamentos" },
    { id_produto: 7, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/wolverine.jpg", id_secao: 1, secao: "Lançamentos" },
    { id_produto: 8, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/astro_bot.jpg", id_secao: 1, secao: "Lançamentos" },
    { id_produto: 9, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/monster_hunter_wilds.jpg", id_secao: 1, secao: "Lançamentos" },
    { id_produto: 10, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/doom_the_dark_ages.jpg", id_secao: 1, secao: "Lançamentos" },
  
    // --- SEÇÃO 2: RPG (id_secao: 2) ---
    { id_produto: 11, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/elden_ring.jpg", id_secao: 2, secao: "RPG" },
    { id_produto: 12, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/ff7_rebirth.jpg", id_secao: 2, secao: "RPG" },
    { id_produto: 13, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/witcher3_complete.jpg", id_secao: 2, secao: "RPG" },
    { id_produto: 14, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/baldurs_gate_3.jpg", id_secao: 2, secao: "RPG" },
    { id_produto: 15, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/persona5_royal.jpg", id_secao: 2, secao: "RPG" },
    { id_produto: 16, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/cyberpunk_ultimate.jpg", id_secao: 2, secao: "RPG" },
    { id_produto: 17, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/dragon_age_veilguard.jpg", id_secao: 2, secao: "RPG" },
    { id_produto: 18, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/demon_souls.jpg", id_secao: 2, secao: "RPG" },
    { id_produto: 19, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/horizon_forbidden_west.jpg", id_secao: 2, secao: "RPG" },
    { id_produto: 20, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/dragons_dogma_2.jpg", id_secao: 2, secao: "RPG" },
  
    // --- SEÇÃO 3: Ação e Aventura (id_secao: 3) ---
    { id_produto: 21, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/tlou_part1.jpg", id_secao: 3, secao: "Ação e Aventura" },
    { id_produto: 22, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/spiderman_2.jpg", id_secao: 3, secao: "Ação e Aventura" },
    { id_produto: 23, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/god_of_war_ragnarok.jpg", id_secao: 3, secao: "Ação e Aventura" },
    { id_produto: 24, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/ghost_of_tsushima.jpg", id_secao: 3, secao: "Ação e Aventura" },
    { id_produto: 25, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/red_dead_2.jpg", id_secao: 3, secao: "Ação e Aventura" },
    { id_produto: 26, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/resident_evil_4_remake.jpg", id_secao: 3, secao: "Ação e Aventura" },
    { id_produto: 27, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/uncharted_legacy.jpg", id_secao: 3, secao: "Ação e Aventura" },
    { id_produto: 28, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/jedi_survivor.jpg", id_secao: 3, secao: "Ação e Aventura" },
    { id_produto: 29, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/assassins_creed_mirage.jpg", id_secao: 3, secao: "Ação e Aventura" },
    { id_produto: 30, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/jogos/ratchet_clank_rift.jpg", id_secao: 3, secao: "Ação e Aventura" },
  
    // --- SEÇÃO 4: Consoles e Acessórios (id_secao: 4) ---
    { id_produto: 31, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/hardware/ps5_slim.jpg", id_secao: 4, secao: "Consoles e Acessórios" },
    { id_produto: 32, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/hardware/ps5_pro.jpg", id_secao: 4, secao: "Consoles e Acessórios" },
    { id_produto: 33, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/hardware/dualsense_white.jpg", id_secao: 4, secao: "Consoles e Acessórios" },
    { id_produto: 34, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/hardware/dualsense_midnight.jpg", id_secao: 4, secao: "Consoles e Acessórios" },
    { id_produto: 35, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/hardware/dualsense_edge.jpg", id_secao: 4, secao: "Consoles e Acessórios" },
    { id_produto: 36, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/hardware/pulse_3d_headset.jpg", id_secao: 4, secao: "Consoles e Acessórios" },
    { id_produto: 37, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/hardware/playstation_portal.jpg", id_secao: 4, secao: "Consoles e Acessórios" },
    { id_produto: 38, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/hardware/charging_station.jpg", id_secao: 4, secao: "Consoles e Acessórios" },
    { id_produto: 39, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/hardware/ps_vr2.jpg", id_secao: 4, secao: "Consoles e Acessórios" },
    { id_produto: 40, valor_unitario: 10.00, unidade: "UN", caminho_imagem: "images/hardware/hd_camera_ps5.jpg", id_secao: 4, secao: "Consoles e Acessórios" }
  ];