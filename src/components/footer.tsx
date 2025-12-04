// SPDX-FileCopyrightText: 2025 European Commission
//
// SPDX-License-Identifier: Apache-2.0

export default function Footer() {
  return (
    <div className="w-full border-t border-t-gray-600 bg-white">
      <p className="py-2 text-center text-xs font-medium text-gray-600">
        This verifier is compatible with the{' '}
        <a
          className="text-indigo-800 underline"
          href="https://docs.ageverification.dev/Technical%20Specification/annexes/annex-A/annex-A-av-profile/"
        >
          EU Age Verification Profile, Version 1.0.6
        </a>
        {' | Powered by '}
        <a
          className="text-indigo-800 underline"
          href="https://www.smartsensesolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          smartSense Consulting Solutions Pvt. Ltd
        </a>
      </p>
    </div>
  );
}
