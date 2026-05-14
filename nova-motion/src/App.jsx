// ─────────────────────────────────────────────────────
//  NOVA MOTION — App Root (React Router v6)
//  Routes:
//    /              → HomePage
//    /schedule      → SchedulePage
//    /classes       → ClassesPage
//    /collection    → ShopPage
//    /membership    → MembershipPage
//    /about         → AboutPage
//    /contact       → ContactPage
//    *              → NotFoundPage
//
//  Global state lives here:
//    - Cart (useCart hook)
//    - Toast notifications
//    - Booked class slots
//    - Active modals (booking, class detail, membership)
// ─────────────────────────────────────────────────────

import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "@/styles/globals.css";
import { useCart }         from "@/hooks/useCart";
import Navbar              from "@/components/Navbar";
import Footer              from "@/components/Footer";
import Toast               from "@/components/Toast";
import CartPanel           from "@/components/CartPanel";
import BookingModal        from "@/components/BookingModal";
import ClassModal          from "@/components/ClassModal";
import MembershipModal     from "@/components/MembershipModal";

import HomePage       from "@/pages/HomePage";
import SchedulePage   from "@/pages/SchedulePage";
import ClassesPage    from "@/pages/ClassesPage";
import ShopPage       from "@/pages/ShopPage";
import MembershipPage from "@/pages/MembershipPage";
import AboutPage      from "@/pages/AboutPage";
import ContactPage    from "@/pages/ContactPage";
import NotFoundPage   from "@/pages/NotFoundPage";

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Shell() {
  const cart = useCart();
  const [cartOpen,    setCartOpen]    = useState(false);
  const [toast,       setToast]       = useState(null);
  const [bookedSlots, setBookedSlots] = useState(new Set());
  const [bookingSlot, setBookingSlot] = useState(null);
  const [classModal,  setClassModal]  = useState(null);
  const [memberModal, setMemberModal] = useState(null);

  const showToast = useCallback((msg, duration = 2800) => {
    setToast(msg);
    setTimeout(() => setToast(null), duration);
  }, []);

  const handleBook = useCallback((slot, day) => setBookingSlot({ slot, day }), []);

  const confirmBooking = useCallback(({ slot, day }) => {
    setBookedSlots((p) => new Set([...p, `${day}-${slot.time}`]));
    setBookingSlot(null);
    showToast(`✓  Booked ${slot.cls} at ${slot.time}`);
  }, [showToast]);

  const confirmMembership = useCallback(({ plan }) => {
    setMemberModal(null);
    showToast(`✓  Welcome to ${plan.name}! Check your inbox.`);
  }, [showToast]);

  const handleAddToCart = useCallback((product) => {
    cart.add(product);
    showToast(`✓  ${product.name} added to cart`);
  }, [cart, showToast]);

  const handleCheckout = useCallback(() => {
    cart.clear();
    setCartOpen(false);
    showToast("✓  Order placed! Confirmation sent to your email.");
  }, [cart, showToast]);

  return (
    <>
      <ScrollToTop />

      <Navbar cartCount={cart.count} onCartOpen={() => setCartOpen(true)} />

      <main>
        <Routes>
          <Route path="/"           element={<HomePage        onToastShow={showToast} />} />
          <Route path="/schedule"   element={<SchedulePage    bookedSlots={bookedSlots} onBook={handleBook} />} />
          <Route path="/classes"    element={<ClassesPage     onClassClick={setClassModal} />} />
          <Route path="/collection" element={<ShopPage        onAddToCart={handleAddToCart} />} />
          <Route path="/membership" element={<MembershipPage  onPlanClick={setMemberModal} />} />
          <Route path="/about"      element={<AboutPage />} />
          <Route path="/contact"    element={<ContactPage     onToastShow={showToast} />} />
          <Route path="*"           element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      {cartOpen && (
        <CartPanel
          items={cart.items} total={cart.total}
          onClose={() => setCartOpen(false)}
          onUpdate={(id, d) => cart.updateQty(id, d)}
          onRemove={(id)    => cart.remove(id)}
          onCheckout={handleCheckout}
        />
      )}

      {bookingSlot && (
        <BookingModal
          slot={bookingSlot.slot} day={bookingSlot.day}
          onClose={() => setBookingSlot(null)}
          onConfirm={confirmBooking}
        />
      )}

      {classModal && (
        <ClassModal
          cls={classModal}
          onClose={() => setClassModal(null)}
          onBook={() => { setClassModal(null); window.location.href = "/schedule"; }}
        />
      )}

      {memberModal && (
        <MembershipModal
          plan={memberModal}
          onClose={() => setMemberModal(null)}
          onConfirm={confirmMembership}
        />
      )}

      <Toast message={toast} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
