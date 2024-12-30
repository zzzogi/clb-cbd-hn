// src/components/MemberModal.tsx
interface Member {
  id: string;
  name: string;
  dob: string; // We'll receive this as ISO string from API
  bio?: string;
  yearsOfExperience: number;
  profileImage: string;
}

interface MemberModalProps {
  member: Member | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MemberModal({ member, isOpen, onClose }: MemberModalProps) {
  if (!member || !isOpen) return null;

  const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal content */}
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Image Section */}
          <div className="md:w-1/3">
            <img
              src={member.profileImage}
              alt={`${member.name}'s profile`}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Information Section */}
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">{member.name}</h2>

            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Age</h3>
                <p className="text-lg">{calculateAge(member.dob)} years old</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600">
                  Date of Birth
                </h3>
                <p className="text-lg">
                  {new Date(member.dob).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600">
                  Experience
                </h3>
                <p className="text-lg">{member.yearsOfExperience} years</p>
              </div>

              {member.bio && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">
                    Biography
                  </h3>
                  <p className="text-lg text-gray-700">{member.bio}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
