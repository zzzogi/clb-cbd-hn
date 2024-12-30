// src/app/members/page.tsx
"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleSection from "../components/TitleSection";
import { MemberModal } from "../components/MemberModal";
interface Member {
  id: string;
  name: string;
  dob: string; // We'll receive this as ISO string from API
  bio?: string;
  yearsOfExperience: number;
  profileImage: string;
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/api/members");
        if (!response.ok) {
          throw new Error("Failed to fetch members");
        }
        const data: Member[] = await response.json();
        setMembers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleMemberClick = (member: Member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  if (loading) {
    return (
      <div>
        <Header />
        <TitleSection
          title="Thành viên"
          additionalText="Dưới đây là thông tin về các thành viên trong CLB"
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <TitleSection
          title="Thành viên"
          additionalText="Dưới đây là thông tin về các thành viên trong CLB"
        />
        <div className="min-h-screen flex items-center justify-center text-red-600">
          Error: {error}
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <TitleSection
        title="Thành viên"
        additionalText="Dưới đây là thông tin về các thành viên trong CLB"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {members.map((member) => (
            <div key={member.id} className="flex flex-col items-center group">
              <div
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-3 
                          transition-transform duration-300 ease-in-out group-hover:scale-105 shadow-lg
                          cursor-pointer"
                onClick={() => handleMemberClick(member)}
              >
                <img
                  src={member.profileImage}
                  alt={`${member.name}'s profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-base md:text-lg font-semibold text-center">
                {member.name}
              </h2>
              <div className="text-xs md:text-sm text-gray-600 text-center">
                <p>{member.yearsOfExperience} years of experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Footer />
    </div>
  );
}
