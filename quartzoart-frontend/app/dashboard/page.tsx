"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Stats {
  total: number;
  thisMonth: number;
  active: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({ total: 0, thisMonth: 0, active: 0 });
  const [recentClientes, setRecentClientes] = useState<{ id: string; nome: string; email: string; cidade: string }[]>([]);

  useEffect(() => {
    fetch("/api/clientes")
      .then((res) => res.json())
      .then((clientes: { id: string; nome: string; email: string; cidade: string; createdAt: string }[]) => {
        const now = new Date();
        const thisMonth = clientes.filter((c) => {
          const d = new Date(c.createdAt);
          return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
        });
        setStats({ total: clientes.length, thisMonth: thisMonth.length, active: clientes.length });
        setRecentClientes(clientes.slice(0, 5));
      })
      .catch(() => {});
  }, []);

  const statCards = [
    {
      label: "Total de Clientes",
      value: stats.total,
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      bg: "bg-indigo-50",
      color: "text-indigo-600",
    },
    {
      label: "Cadastrados este mês",
      value: stats.thisMonth,
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      bg: "bg-emerald-50",
      color: "text-emerald-600",
    },
    {
      label: "Clientes Ativos",
      value: stats.active,
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: "bg-blue-50",
      color: "text-blue-600",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Visão geral do sistema</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {statCards.map((card) => (
          <div key={card.label} className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500 text-sm">{card.label}</p>
              <div className={`w-10 h-10 ${card.bg} rounded-xl flex items-center justify-center`}>
                {card.icon}
              </div>
            </div>
            <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Recent + Quick actions */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-gray-900">Clientes Recentes</h2>
            <Link
              href="/dashboard/clientes"
              className="text-indigo-600 hover:text-indigo-700 text-sm font-medium transition-colors"
            >
              Ver todos →
            </Link>
          </div>

          {recentClientes.length === 0 ? (
            <div className="text-center py-10">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm">Nenhum cliente cadastrado</p>
              <Link
                href="/dashboard/clientes"
                className="inline-block mt-3 text-indigo-600 text-sm font-medium hover:text-indigo-700"
              >
                Cadastrar primeiro cliente
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {recentClientes.map((c) => (
                <div key={c.id} className="flex items-center gap-4 py-3">
                  <div className="w-9 h-9 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 text-sm font-semibold">
                      {c.nome.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-900 text-sm font-medium truncate">{c.nome}</p>
                    <p className="text-gray-500 text-xs truncate">{c.email}</p>
                  </div>
                  <span className="text-gray-400 text-xs hidden sm:block">{c.cidade}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="font-semibold text-gray-900 mb-5">Ações Rápidas</h2>
          <div className="space-y-3">
            <Link
              href="/dashboard/clientes"
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all group"
            >
              <div className="w-8 h-8 bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900 text-sm font-medium">Novo Cliente</p>
                <p className="text-gray-400 text-xs">Cadastrar cliente</p>
              </div>
            </Link>
            <Link
              href="/dashboard/clientes"
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
            >
              <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900 text-sm font-medium">Lista de Clientes</p>
                <p className="text-gray-400 text-xs">Ver todos</p>
              </div>
            </Link>
          </div>

          {/* Info box */}
          <div className="mt-6 p-4 bg-indigo-50 rounded-xl">
            <p className="text-indigo-700 text-xs font-semibold mb-1">Dica</p>
            <p className="text-indigo-600 text-xs leading-relaxed">
              Acesse o menu lateral para navegar entre as seções do sistema.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
